
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/common/AdManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ed94bn8D51Mt57sqqgqKgvE', 'AdManager');
// scripts/common/AdManager.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    androidLink: {
      "default": ''
    },
    iosLink: {
      "default": ''
    },
    defaultLink: {
      "default": ''
    }
  },
  openAdUrl: function openAdUrl() {
    console.log("open"); //google instant
    // cc.androidInstant.showInstallPrompt('https://play.google.com/store/apps/details?id=com.game.space.shooter2')

    var clickTag = '';
    window.androidLink = this.androidLink;
    window.iosLink = this.iosLink;
    window.defaultLink = this.defaultLink;
    var adchanel = '{{__adv_channels_adapter__}}';

    if (window.openAdUrl) {
      console.log(adchanel);
      window.openAdUrl(adchanel);
    } else {
      window.open();
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbW1vbi9BZE1hbmFnZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJhbmRyb2lkTGluayIsImlvc0xpbmsiLCJkZWZhdWx0TGluayIsIm9wZW5BZFVybCIsImNvbnNvbGUiLCJsb2ciLCJjbGlja1RhZyIsIndpbmRvdyIsImFkY2hhbmVsIiwib3BlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFdBQVcsRUFBRTtBQUNULGlCQUFTO0FBREEsS0FETDtBQUlSQyxJQUFBQSxPQUFPLEVBQUU7QUFDTCxpQkFBUztBQURKLEtBSkQ7QUFPUkMsSUFBQUEsV0FBVyxFQUFFO0FBQ1QsaUJBQVM7QUFEQTtBQVBMLEdBSFA7QUFlTEMsRUFBQUEsU0FBUyxFQUFFLHFCQUFVO0FBQ2pCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBRGlCLENBRWpCO0FBQ0E7O0FBQ0EsUUFBSUMsUUFBUSxHQUFHLEVBQWY7QUFDQUMsSUFBQUEsTUFBTSxDQUFDUCxXQUFQLEdBQXFCLEtBQUtBLFdBQTFCO0FBQ0FPLElBQUFBLE1BQU0sQ0FBQ04sT0FBUCxHQUFpQixLQUFLQSxPQUF0QjtBQUNBTSxJQUFBQSxNQUFNLENBQUNMLFdBQVAsR0FBcUIsS0FBS0EsV0FBMUI7QUFDQSxRQUFJTSxRQUFRLEdBQUcsOEJBQWY7O0FBQ0EsUUFBR0QsTUFBTSxDQUFDSixTQUFWLEVBQXFCO0FBQ2pCQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsUUFBWjtBQUNBRCxNQUFBQSxNQUFNLENBQUNKLFNBQVAsQ0FBaUJLLFFBQWpCO0FBRUgsS0FKRCxNQUlPO0FBQ0hELE1BQUFBLE1BQU0sQ0FBQ0UsSUFBUDtBQUNIO0FBQ0o7QUEvQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgYW5kcm9pZExpbms6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGlvc0xpbms6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGRlZmF1bHRMaW5rOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9wZW5BZFVybDogZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJvcGVuXCIpXG4gICAgICAgIC8vZ29vZ2xlIGluc3RhbnRcbiAgICAgICAgLy8gY2MuYW5kcm9pZEluc3RhbnQuc2hvd0luc3RhbGxQcm9tcHQoJ2h0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20uZ2FtZS5zcGFjZS5zaG9vdGVyMicpXG4gICAgICAgIHZhciBjbGlja1RhZyA9ICcnO1xuICAgICAgICB3aW5kb3cuYW5kcm9pZExpbmsgPSB0aGlzLmFuZHJvaWRMaW5rO1xuICAgICAgICB3aW5kb3cuaW9zTGluayA9IHRoaXMuaW9zTGluaztcbiAgICAgICAgd2luZG93LmRlZmF1bHRMaW5rID0gdGhpcy5kZWZhdWx0TGluaztcbiAgICAgICAgbGV0IGFkY2hhbmVsID0gJ3t7X19hZHZfY2hhbm5lbHNfYWRhcHRlcl9ffX0nXG4gICAgICAgIGlmKHdpbmRvdy5vcGVuQWRVcmwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFkY2hhbmVsKTtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuQWRVcmwoYWRjaGFuZWwpO1xuICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKCk7XG4gICAgICAgIH1cbiAgICB9XG59KTsiXX0=